import React, { useState, useEffect } from 'react'
import { animalsInfo } from '../../data/aniamalInfor'
import { animalTypes } from '../../types/animalType'
import { Container, Title, Heading, Grid,  } from './style'


export const AllAnimals = () => {
  const [gridIcon, setGridIcon] = useState<animalTypes[]>([])

  useEffect(() => {
      createGrid()
  }, [])

  const createGrid = () => { 
    let grid:animalTypes[] = [];

    for(let i = 0; i < gridIcon.length;) {
      grid.push({
        icon: string,
        race: String,
        color: string,
        gender: string
      })
    }
  }

  return <>
    <Container>
      <Title>
        <Heading>Todos os animais disponíves para adoção</Heading>
      </Title>
      <Grid>

      </Grid>
    </Container>
  </>
}

export default AllAnimals