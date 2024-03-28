'use client'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import styled from 'styled-components'
import Menu from './Menu'
import JobsTable from './JobsTable';
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function Admin() {
    const [jobs, setJobs] = useState([])
    const { push } = useRouter()

    useEffect(() => {
        let jwt = sessionStorage.getItem("jwt");
        if (!jwt) {
            push('/login')
        }
    }, [])

    return (
        <AdminContainer>
            <Menu setJobs={setJobs} />
            { jobs.length ? <JobsTable jobs={jobs} /> : '' }
        </AdminContainer>
    )
}

const AdminContainer = styled.div`
    background-color: #D8DEE2;
    min-height: 100vh;
`