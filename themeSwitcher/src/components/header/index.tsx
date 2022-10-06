import React, {useContext} from 'react'
import Switch from 'react-switch'
import {Container} from './styles'
import { ThemeContext } from 'styled-components'
import {shade} from 'polished'
interface Props { toggleTheme(): void}

export const Header: React.FC <Props> = ({toggleTheme}) =>{
const {colors, title} = useContext(ThemeContext)

    return(
        <Container>
            Hello World
            <Switch
             onChange={toggleTheme}
             checked={title === 'dark'}
             checkedIcon={false}
             uncheckedIcon={false}
             height={10}
             width={40}
             handleDiameter={20}
             onColor={colors.secundary}
             offColor={shade(0.20, colors.primary)}
             />
        </Container>
    )
}