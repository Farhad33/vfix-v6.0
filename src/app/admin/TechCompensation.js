import { useState } from 'react';
import styled from 'styled-components'
import { authAPI } from '@/lib/api'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';

export default function TechCompensation({ open, setOpen, technicianRate, technicianRateMode, id, strapiTechID, jobs, setJobs }) {
    const [mode, setMode] = useState(technicianRateMode);
    const [rate, setRate] = useState(technicianRate);
    const [futureJobs, setFutureJobs] = useState(false);

    const handleOnSubmit = (e) => {
        e.preventDefault()
        // update the job (job-technicians)
        console.log('id => ', id);
        let dataJobTech = {  
            technicianRateMode: mode,
            technicianRate: rate,
            id
        }
        authAPI().put(`/job-technicians`, dataJobTech)
        .then(result => {
            console.log('job-technicians result => ', result);
            setOpen(false)
        })
        .catch(console.log)


        if(futureJobs) {
            // update technicians
            let dataTech = {  
                technicianRateMode: mode,
                technicianRate: rate,
                id: strapiTechID
            }
            // technicians
            authAPI().put(`/technicians`, dataTech)
            .then(result => {
                console.log('technicians result => ', result);
                setOpen(false)
            })
            .catch(console.log)
        }
    }

    return (
        <Dialog
            open={open} 
            onClose={() => setOpen(false)}
            fullWidth
            maxWidth="xs"
        >
            <DialogTitle>Tech Compensation</DialogTitle>
            <DialogContent>
                <Form onSubmit={handleOnSubmit}>
                    <FormControl>
                        <FormLabel>Change Rate</FormLabel>
                        <RadioGroup
                            name="controlled-radio-buttons-group-rateMode"
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                        >
                            <FormControlLabel value="hourly" control={<Radio />} label="Hourly" />
                            <FormControlLabel value="percentage" control={<Radio />} label="Percentage" />
                        </RadioGroup>
                        <FormControl  >
                            <FilledInput
                                onChange={(e) => setRate(e.target.value)}
                                value={rate}
                                startAdornment={
                                    <InputAdornment position="start">
                                        { mode === 'hourly' ? '$' : '%' }
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                        <FormControlLabel control={
                            <Checkbox 
                                checked={futureJobs}
                                onChange={() => setFutureJobs(!futureJobs)}
                            />
                            } 
                            label="Apply to future jobs" />
                    </FormControl>

                    <Button 
                        variant="contained" 
                        autoFocus
                        type='submit'
                    >
                        Save
                    </Button>
                </Form>
            </DialogContent>
        </Dialog>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    button {
        width: 200px;
        align-self: flex-end;
        margin: 20px 0;
    }
`