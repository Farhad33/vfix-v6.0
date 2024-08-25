import { useState, useRef } from 'react'
import styled from 'styled-components'
import { authAPI } from '@/lib/api'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { Zoom, Button, Tooltip as MUITooltip } from '@mui/material';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { tooltipClasses } from '@mui/material/Tooltip';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TechCompensation from './TechCompensation'
import {
  DataGrid as MUIDataGrid,
  GridCellEditStopReasons,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from '@mui/x-data-grid';


export default function JobsTable({ jobs }) {
  const selectedRows = useRef([])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'status', headerName: 'Status', width: 100, renderCell: ({row: {status}}) =>`${status || ''}` },
    { field: 'comp', headerName: 'Tech Comp', width: 100, renderCell: ({ row: {technicianRate, technicianRateMode} }) => {
      let rateAndSign = technicianRateMode === 'percentage' ? '% ' : 'H '
      rateAndSign += technicianRate
      return (<div>{rateAndSign}</div>)
    } },
    { field: 'serviceType', headerName: 'Service Type', width: 130 },
    { field: 'startEnd', headerName: 'Job Date\nTime Start - Stop', width: 145, renderCell: (params) => {
      return (
        <StartEndTime>
          <div>{params.row.jobDate}</div>
          <div>{params.row.jobHour}</div>
        </StartEndTime>
      )
    } },
    { field: 'totalHour', headerName: 'Total Hours Worked', width: 130 },
    { field: 'jobPrice', headerName: 'Final price of the job', width: 130, renderCell: ({row: {jobPrice}}) => jobPrice === '' ? '' : `$${jobPrice}` },
    { field: 'partsPrice', headerName: 'Parts', width: 70, renderCell: ({row: {partsPrice}}) => partsPrice === '' ? '' : `$${partsPrice}` },
    { field: 'cash', headerName: 'Cash Received By Technician', width: 130, renderCell: ({row: {sideTech, cash}}) => {
      return sideTech.length ? <GrayCell>${cash}</GrayCell> : <div>${cash}</div>
    } },
    { field: 'reimbursement', headerName: 'Technician Reimbursment', width: 130, editable: true, renderCell: ({row: {sideTech, reimbursement}}) => {
      return sideTech.length ? <GrayCell>${reimbursement}</GrayCell> : <div>${reimbursement}</div>
    } },
    { field: 'sideTech', headerName: 'Side Technician', width: 130, editable: true, renderCell: ({row: {sideTech}}) => sideTech === '' ? '' : `$${sideTech}`},
    { field: 'finalPay', headerName: 'Technician Final Payout', width: 130, renderCell: ({row: {finalPay, isPaid}}) => (
      isPaid ? 
      <FinalPay color='green'><CheckCircleOutlineIcon />${finalPay}</FinalPay> 
      : 
      <FinalPay color='red'><HighlightOffIcon/>${finalPay}</FinalPay>
    ) },
    { field: 'tooltip', headerName: '', width: 10, renderCell: CustomCellTooltip}

  ];

  const CustomToolbar = () => (
    <GridToolbarContainer>
      <GridToolbarDensitySelector />
      <GridToolbarExport />
      <Button variant='text' onClick={handleMarkAsPaid}>Mark as paid for selected jobs</Button>
    </GridToolbarContainer>
  )

  const handleMarkAsPaid = () => {
    let newArray = selectedRows.current
    if(newArray[newArray.length -1] === -1) {
      newArray.pop()
    }
    newArray.forEach(id => {
      let data = {  
        isPaid: true,
        id
      }
      authAPI().put(`/job-technicians`, data)
      .catch(console.log)
    })
  }

    return (
        <JobsContainer>
            <DataGrid
                rows={jobs}
                columns={columns}
                slots={{
                  toolbar: CustomToolbar,
                }}
                checkboxSelection
                onRowSelectionModelChange={(newRowSelectionModel) => {
                  selectedRows.current = newRowSelectionModel
                }}
                getRowHeight={({ id, densityFactor }) => {
                  return 70 * densityFactor;
                }}
                onCellEditStop={(params, event) => {
                  if (params.reason === GridCellEditStopReasons.tabKeyDown || params.reason === GridCellEditStopReasons.enterKeyDown) {
                    let data = { 
                      [params.field]: event.target.value,
                      id: params.id
                    }
                    authAPI().put(`/job-technicians`, data)
                  }
                }}
            />
        </JobsContainer>
    )
}

const JobsContainer = styled.div`
  position: relative;
  bottom: 57px;
  margin: 0 50px;
  background-color: #ffffff;
  border-radius: 18px;
  overflow: hidden;

  .MuiDataGrid-row--lastVisible {
    .MuiDataGrid-cell {
      border-bottom: 0;
      &:nth-child(6), &:nth-child(7), &:nth-child(8), &:nth-child(10), &:nth-child(11), &:nth-child(12), &:nth-child(14) {
        font-weight: 600;
        font-size: 18px;
        text-align: left;
      }
      &:nth-child(14) {
        p {
          color: black;
        }
        svg {
          display: none;
        }
      }
      &:nth-child(1), &:nth-child(2), &:nth-child(3), &:nth-child(4), &:nth-child(5),  
      &:nth-child(9), &:nth-child(10), &:nth-child(13), &:nth-child(15) {
        div {
          visibility: hidden;
        }
        span {
          visibility: hidden;
        }
      }
    }
  }

`

const DataGrid = styled(MUIDataGrid)`
  .MuiDataGrid-columnHeaderTitle {
    white-space: break-spaces;
    line-height: normal;
  }
`
const GrayCell = styled.div`
  color: lightgray;
`

const Tooltip = styled(({ className, ...props }) => (
  <MUITooltip {...props} classes={{ popper: className }} />
))(() => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#fff',
    padding: '26px 24px',
    boxShadow: '0px 2px 48px 0px #00000026',
    borderRadius: '7px'
  },
}))

const CustomCellTooltip = ({ id, row: { isPaid, technicianRate, technicianRateMode, strapiTechID }})   => { 
  const [open, setOpen] = useState(false)
  const [hasItPaid, setHasItPaid] = useState(isPaid)
  const [openDialog, setOpenDialog] = useState(false)

  const handleSubmit = () => {
    let data = {  
      isPaid: !hasItPaid,
      id
    }
    authAPI().put(`/job-technicians`, data)
    .then(result => {
      setHasItPaid(!hasItPaid)
    })
    .catch(console.log)
  }

  const handleTechCompensationClick = () => {
    setOpenDialog(true)
    setOpen(false)
  }

  const handleTechDeletion = () => {
    console.log('id => ', id);
    authAPI().delete(`/jobs/${id}`)
    .then(result => {
      console.log('result => ', result);
    })
    .catch(console.log)
  }

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <div>
        <Tooltip
          TransitionComponent={Zoom}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          placement='left'
          title={
              <TooltipTitle>
                {hasItPaid ?
                  <Button 
                    variant="outlined"
                    onClick={handleSubmit}
                    color="error"
                  >
                    <HighlightOffIcon /> Mark as Unpaid
                  </Button>
                  :
                  <Button 
                    variant="contained"
                    onClick={handleSubmit}
                    color="success"
                  >
                    <CheckCircleOutlineIcon /> Mark as Paid
                  </Button>
                }
                <Button 
                  variant="outlined"
                  onClick={handleTechCompensationClick}
                >Tech Compensation</Button>
                <Button 
                  variant="contained"
                  color="error"
                  onClick={handleTechDeletion}
                >Detele</Button>
              </TooltipTitle>
            } 
          >
            <MoreVertIcon onClick={() => setOpen(!open)} />
        </Tooltip>
        <TechCompensation 
          open={openDialog} 
          setOpen={setOpenDialog}
          technicianRate={technicianRate}
          technicianRateMode={technicianRateMode}
          id={id}
          strapiTechID={strapiTechID}
        />
      </div>
    </ClickAwayListener>
)}

const TooltipTitle = styled.div`
  button {
    width: 100%;
    margin-bottom: 10px;
    svg {
      margin-right: 5px;
    }
  }
`
const FinalPay = styled.p`
  display: flex;
  align-items: center;
  color: ${({color}) => color};
  svg {
    font-size: 1.1rem;
    margin-right: 5px;
  }
`
const StartEndTime = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  div {
    line-height: 30px;
  }
`