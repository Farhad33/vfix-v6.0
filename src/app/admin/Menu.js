import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { authAPI, getToken } from '@/lib/api'

import dayjs from 'dayjs';
import { LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker as MUIDatePicker } from '@mui/x-date-pickers/DatePicker';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';


export default function Menu({ setJobs }) {
    const oneWeekAgo = dayjs().subtract(1, 'week')
    const now = dayjs()
    const [dateFrom, setDateFrom] = useState(oneWeekAgo)
    const [dateTo, setDateTo] = useState(now)
    const [selectedTech, setSelectedTech] = useState('');
    const [techs, setTechs] = useState([])
    const token = getToken()

    const handleTechChange = (event) => {
        setSelectedTech(event.target.value + '');
    };

    useEffect(() => {
        if(token) {
            authAPI().get('/technicians')
            .then(result => {
                setTechs(result.data.data) 
            })
            .catch(console.log)
        }
    }, [token])

    const handleSearchSubmit = (event) => {
        event.preventDefault()
        if (selectedTech.length) {
            const from = dayjs(dateFrom).format('YYYY-MM-DD')
            const to = dayjs(dateTo).add(1, 'day').format('YYYY-MM-DD')
            authAPI().get(`/jobs/technicians/${selectedTech}/${from}/${to}`)
            .then(result => {
                const jobs = jobsSelector(result?.data?.data || [])
                setJobs(jobs)
            })
            .catch(console.log)
        }
    }
    
    function convertToMinutes(timeString) {
        const [hours, minutes] = timeString.split(':').map(Number);
        const totalMinutes = hours * 60 + minutes;
        return totalMinutes < 60 ? 60 : totalMinutes
    }
    
    const calculateFinalPay = ({
        technicianRateMode,
        technicianRate=0,
        totalHour=0,
        cash=0,
        reimbursement=0,
        jobPrice=0,
        sideTech,
        partsPrice
    }) => {
        if (sideTech.length > 0) {
            return Number(sideTech)
        }
        let finalPayment = 0
        const minutes = convertToMinutes(totalHour)
        const rate = Number(technicianRate) / 60
        if(technicianRateMode === 'hourly') {
            finalPayment = (minutes * rate) - Number(cash) + Number(reimbursement)
            finalPayment = finalPayment.toFixed(2)
        } else if(technicianRateMode === 'percentage') {
            let jobPriceWithoutParts = jobPrice - partsPrice
            finalPayment = (jobPriceWithoutParts * (Number(technicianRate)/100)) - Number(cash) + Number(reimbursement)
            finalPayment = finalPayment.toFixed(2)
            
        }
        return finalPayment
    }

    function toHoursAndMinutes(totalMinutes) {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        const addZeroHours = hours < 10 ? `0${hours}` : `${hours}`;
        const addZeroMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
        return `${addZeroHours}:${addZeroMinutes}`;
    }
    const jobsSelector = (data=[]) => {
        var sum = {
            cash: 0,
            finalPay: 0,
            reimbursement: 0,
            hours: 0,
        }

        let jobs = data.map(element => {
            let job = {}
            job.id = element.id
            job.isPaid = element.attributes.isPaid
            job.reimbursement = element.attributes.reimbursement
            job.sideTech = element.attributes.sideTech
            job.technicianRate = element.attributes.technicianRate
            job.technicianRateMode = element.attributes.technicianRateMode
            job.serviceType = element.attributes.jobs.data[0].attributes.serviceType
            job.jobPrice = element.attributes.jobs.data[0].attributes.jobPrice
            job.jobDate = element.attributes.jobs.data[0].attributes.jobDate
            job.jobHour = element.attributes.jobs.data[0].attributes.jobHour
            job.partsPrice = element.attributes.jobs.data[0].attributes.partsPrice | 0
            job.status = element.attributes.jobs.data[0].attributes.status
            job.totalHour = element.attributes.jobs.data[0].attributes.totalHoursWorked
            job.cash = element.attributes.jobs.data[0].attributes.cash
            job.strapiTechID = element.attributes.technicians.data[0].id
            const finalPay = calculateFinalPay(job)
            job.finalPay = finalPay
            sum.cash = sum.cash += Number(job.cash)
            sum.finalPay = sum.finalPay += Number(job.finalPay)
            sum.reimbursement = sum.reimbursement += Number(job.reimbursement)
            sum.hours = sum.hours += Number(convertToMinutes(job.totalHour))
            return job
        })
        
        
        sum.hours = toHoursAndMinutes(sum.hours)
        sum.finalPay = sum.finalPay.toFixed(2)
        
        jobs.push({
            id: '',
            isPaid: false,
            reimbursement: sum.reimbursement,
            sideTech: '',
            technicianRate: '',
            technicianRateMode: '',
            serviceType: 'Total',
            jobPrice: '',
            jobDate: '',
            jobHour: '',
            partsPrice: '',
            totalHour: sum.hours,
            cash: sum.cash,
            finalPay: sum.finalPay,
        })
    return jobs
}
    
    return (
        <Header>

            <TechnicianForm onSubmit={handleSearchSubmit}>
                    <FormControl>
                        <InputLabel>Technician</InputLabel>
                        <Select
                            value={selectedTech}
                            label="Technician"
                            onChange={handleTechChange}
                        >
                            {techs?.map(({attributes:{technicianName}, id}, index) => (
                                <MenuItem key={id} value={id}>{technicianName}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="From"
                        value={dateFrom}
                        onChange={(newValue) => setDateFrom(newValue)}
                    />
                    <DatePicker
                        label="To"
                        value={dateTo}
                        onChange={(newValue) => setDateTo(newValue)}
                    />
                </LocalizationProvider>
                <SearchButton type='submit' variant="contained">Search</SearchButton>
            </TechnicianForm>
        </Header>
    )
}

const Header = styled.header`
    background-color: #242F3F;
    display: grid;
    padding: 30px 5px 80px 5px;
    font-size: 14px;
    grid-template-columns: 100%;
    align-items: center;
`
const TechnicianForm = styled.form`
    display: grid;
    grid-template-columns: 35% 15.5% 15.5% 15%;
    justify-content: center;   

    label {
        display: flex;
        align-items: center;
        font-size: 18px;
        font-weight: 500;
        color: #ffffff;
    }
    .MuiSelect-select {
        color: #ffffff;
    }
    svg {
        color: #ffffff;
    }
    .MuiFormControl-root {
        min-width: 200px;
        max-width: 300px;
        background-color: #2c3543;
    }
    button {
        margin-left: 25px;
    }
`
const DatePicker = styled(MUIDatePicker)`
    .MuiInputBase-root {
        height: 56px;
        color: #ffffff;
    }
    svg {
        color: #ffffff
    }
    margin: 0 10px !important;
`
const SearchButton = styled(Button)`
    margin: 0 5px;
    font-size: 18px;
    width: 150px;
`