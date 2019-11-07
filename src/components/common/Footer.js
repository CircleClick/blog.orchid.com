import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import SocialIcons from './SocialIcons.js'
import Navigation from './Navigation.js'

const SocialIcon = styled.li`
    list-style: none;
    padding: 0;
    margin: 0;
`;

const Footer = ({ children, site }) => {
    return (<footer css={css`
        max-width: 63rem;
        box-sizing: border-box;
        margin: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 4rem;
        font-size: var(--font-size-small);

        @media (max-width: 800px) {
            flex-direction: column-reverse;
            padding: 1rem;
            & > div {
                margin: 20px 0;
            }
        }
    `}>
        <div>
            <a href="https://www.orchid.com/">
                <img src={'/images/orchid-logo-world.svg'} alt={site.title} css={css`
                    display: block;
                    @media (max-width: 800px) {
                        max-width: 100px;
                    }
                `} />
            </a>
            © {new Date().getFullYear()} Orchid Labs Inc.

            <p css={css`
                & > a {
                    font-size: 80%;
                    color: var(--link-color);
                }
            `}>
                <a href="https://www.orchid.com/privacy-policy">Privacy Policy</a> | <a href="https://www.orchid.com/service-terms">Terms of Service</a>
            </p>
        </div>
        <div css={css`
            li a {
                font-family: var(--font-sans-serif);
                font-size: var(--font-size-small);
                font-weight: var(--font-normal);
                text-transform: none;
            }
        `}>
            <Navigation data={site.navigation} />
        </div>
        <div css={css`
            li {
                display: inline-block;
                margin: .25rem;
            }
        `}>
            <b css={css`
                font-family: var(--font-family-heading);
            `}>Follow Us</b>
            <SocialIcons />
        </div>
    </footer>)
}

export default Footer

