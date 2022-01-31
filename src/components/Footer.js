import React from "react"
import { Container } from "react-bootstrap"

export default function Footer() {

    return (
        <footer>
            <Container>
                <small>© Copyright 2022, Built by {' '}
                    <a href="https://github.com/cleverbot026">cleverbot</a> {' '}
                    Powered by React
                </small>
            </Container>
        </footer>
    );

}