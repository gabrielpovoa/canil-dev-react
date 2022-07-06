import React, { useState, useEffect } from 'react'
import { animalsInfo } from '../../data/aniamalInfo'
import { animalTypes } from '../../types/animalType'
import { Container, Title, Heading, Grid, Item, Content, ImageInfo } from './style'

import acara from '../../images/acara.jpg'
import bengal from '../../images/bengal.jpg'
import bulldog from '../../images/bulldog.jpg'
import golden from '../../images/golden.jpg'
import husky from '../../images/husky.jpg'
import neon from '../../images/neon.jpg'
import siames from '../../images/siames.jpg'
import pastorAlemao from '../../images/pastor-alemao.jpg'
import persa from '../../images/persa.jpg'
import tanictis from '../../images/tanictis.jpg'
import zwergspitz from '../../images/zwergspitz.jpg'
import sphynx from '../../images/sphynx.jpg'
import labrador from '../../images/labrador.jpg'
import limpaVidro from '../../images/limpavidro.jpg'
import poodle from '../../images/poodle.jpg'
import matoGrosso from '../../images/matogrosso.jpg'
import mainecoon from '../../images/mainecoon.jpg'

export const AllAnimals = () => {

  return <>
    <Container>
      <Title>
        <Heading>Todos os animais disponíves para adoção</Heading>
      </Title>
      <Grid>
        <ImageInfo>
          <Item src={acara} />
          <Content>
            <h2>Acará Bandeira</h2>
            <p>Cor: Preto</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>

        <ImageInfo>
          <Item src={bengal} />
          <Content>
            <h2>Bengal</h2>
            <p>Cor: Branco, Preto e Amarelo</p>
            <p>Gênero: Feminino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={bulldog} />
          <Content>
            <h2>Bulldog</h2>
            <p>Cor: Branco e Amarelo</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={golden} />
          <Content>
            <h2>Golden Retriever</h2>
            <p>Cor: Amarelo</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={poodle} />
          <Content>
            <h2>Poodle</h2>
            <p>Cor: Branco</p>
            <p>Gênero: Feminino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={husky} />
          <Content>
            <h2>Husky Siberiano</h2>
            <p>Cor: Branco e Preto</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={neon} />
          <Content>
            <h2>Tetra Neon</h2>
            <p>Cor: Vermelho e Azul</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={siames} />
          <Content>
            <h2>Siamês</h2>
            <p>Cor: Amarelo e Preto</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={pastorAlemao} />
          <Content>
            <h2>Pastor-alemão</h2>
            <p>Cor: Amarelo e Preto</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={persa} />
          <Content>
            <h2>Persa</h2>
            <p>Cor: Amarelo</p>
            <p>Gênero: Feminino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={tanictis} />
          <Content>
            <h2>Tanictis</h2>
            <p>Cor: Vermelho</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={zwergspitz} />
          <Content>
            <h2>Zwergspitz</h2>
            <p>Cor: Amarelo</p>
            <p>Gênero: Feminino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={sphynx} />
          <Content>
            <h2>Sphynx</h2>
            <p>Cor: Branco</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={labrador} />
          <Content>
            <h2>Labrador-retriever</h2>
            <p>Cor: Branco</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={limpaVidro} />
          <Content>
            <h2>Limpa Vidro</h2>
            <p>Cor: Verde e Branco</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={matoGrosso} />
          <Content>
            <h2>Mato Grosso</h2>
            <p>Cor: Laranja</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
        <ImageInfo>
          <Item src={mainecoon} />
          <Content>
            <h2>Maine Coon</h2>
            <p>Cor: Preto e Branco</p>
            <p>Gênero: Masculino</p>
          </Content>
        </ImageInfo>
      </Grid>
    </Container>
  </>
}

export default AllAnimals