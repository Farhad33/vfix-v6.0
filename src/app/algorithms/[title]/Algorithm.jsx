'use client'
import React, { useState, useEffect } from'react'
import Styled from 'styled-components'
import Editor from "@monaco-editor/react";
import SidePanel from '@/components/SidePanel'
import Container from '@/components/Container'
import Typography from '@/components/Typography'
import { algorithems } from '@/app/algorithms/data'


export default function Algorithm({ params }) {
    const [editorHeight, setEditorHeight] = useState('auto');

    const handleEditorDidMount = (editor) => {
        setTimeout(() => {
            editor.getAction('editor.action.formatDocument').run();
        }, 300);
        editor.updateOptions({
            scrollbar: {
                vertical: 'hidden',
                // horizontal: 'visible',
                horizontal: 'hidden',
                handleMouseWheel: false
            },
            wordWrap: 'off',
            scrollBeyondLastLine: false,
            mouseWheelScrollSensitivity: 0,
            mouseWheelZoom: false
        });

        const updateHeight = () => {
            const contentHeight = editor.getContentHeight();
            setEditorHeight(`${contentHeight}px`);
          };

          updateHeight();
    }
      
    return (
        <AlgorithmContainer>
            <SidePanel items={algorithems} />
            <PageContainer column center>
                <Typography variant="h2">{algorithems[params.title].title}</Typography>
                {algorithems[params.title].content.map((item, index) => (
                    <ContentContainer column key={index}>
                        <Typography variant="body3" as='pre' >{item.description}</Typography>
                        <Editor
                            height={editorHeight}
                            defaultLanguage="javascript"
                            defaultValue={item.code}
                            theme="vs-dark"
                            onMount={handleEditorDidMount}
                            options={{
                                automaticLayout: true,
                                formatOnPaste: true,
                                scrollBeyondLastLine: false,
                                fontSize: 15,
                                minimap: { enabled: false },
                                wordWrap: 'off',
                                glyphMargin: false,
                            }}
                        />
                    </ContentContainer>
                ))}
            </PageContainer>
        </AlgorithmContainer>
    )
}

const AlgorithmContainer = Styled(Container)`
`
const PageContainer = Styled(Container)`
    width: 80%;
    margin: 0 auto;
    h2 {
        margin-bottom: 20px;
        margin-top: 40px;
    }
    @media (max-width: 768px) {
        width: 95%;
    }
`
const ContentContainer = Styled(Container)`
    width: 100%;
    height: 100%;
    > pre {
        text-wrap: wrap;
        margin: 20px 0;
        white-space: pre-wrap;
        font-family: inherit;
    }
    .monaco-editor .overlayWidgets .iPadShowKeyboard {
        display: none;
    }
    .monaco-editor {
        touch-action: none;
    }
`