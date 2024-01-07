'use client'
import React, { useEffect, useState } from'react'
import Styled from 'styled-components'
import { useRouter, usePathname } from 'next/navigation'
import Container from '@/components/Container'
import Typography from '@/components/Typography'

export default function SidePanel({ items }) {
    const [open, setOpen] = useState(true)
    const { push } = useRouter()
    const pathname = usePathname()
    const path = pathname.split('/')[2]

    useEffect(() => {
        if(path) {
            setOpen(false)
        }
    }, [path])

    return (
        <SidePanelContainer column $open={open}>
            <ArrowButton $open={open} onClick={() => setOpen(!open)}>
                {open ? '<' : '>'}
            </ArrowButton>
            <ItemsContainer column $open={open}>
                {Object.keys(items).map((key, index) => (
                    <Item
                        key={index}
                        onClick={() => push(items[key].link)}
                        variant='body3'
                        $selected={path === key}
                    >
                        {items[key].title}
                    </Item>
                ))}
            </ItemsContainer>
        </SidePanelContainer>
    )
}


const SidePanelContainer = Styled(Container)`
    background-color: ${({$open}) => $open ? '#d44e4e' : 'transparent' };
    width: ${({$open}) => $open ? '200px' : 'unset' };
    height: 100%;
    padding: ${({$open}) => $open ? '10px' : '0' };
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
    position: fixed;
    top: 100px;
    left: 0;
    z-index: 10;
`
const ItemsContainer = Styled(Container)`
    display: ${({$open}) => $open ? 'flex' : 'none' };
    overflow: scroll;
`

const Item = Styled(Typography)`
    color: ${({$selected}) => $selected? 'black' : 'white' };
    margin-bottom: 15px;
    cursor: pointer;
`
const ArrowButton = Styled.div`
    background-color: ${({$open}) => $open ? 'transparent' : '#d44e4e' };
    color: white;
    font-size: 30px;
    font-weight: 600;
    cursor: pointer;
    text-align: right;
    ${({$open}) => $open ? '' : 'position: sticky; top: 100px; left: 0;' }
    padding: ${({$open}) => $open ? '0' : '10px' };
`