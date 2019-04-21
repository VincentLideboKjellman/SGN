import React, { Component } from 'react';
import styled from 'styled-components';
import { Fragment } from 'react';
import Layout from '../Layout';
import H1 from '../H1';
import H2 from '../H2';
import P from '../P';
import Line from '../Line';
import HomeCard from '../HomeCard';
import Navbar from '../Navbar';
import LetterBig from '../LetterBig';
import SmallP from '../SmallP';
import ArrowRight from '../SVGs/ArrowRight';
import nookies from 'nookies';
import Form from '../Form';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Video from '../Video';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHighContrastMode: null
    };
  }

  componentDidMount() {
    this.setState({
      isHighContrastMode:
        nookies.get(this.state.ctx).contrast === 'true' ? 'true' : 'false'
    });
  }

  render() {
    const isHighContrastMode = this.state.isHighContrastMode === 'true';

    return (
      <Layout>
        <Video />
        <div
          style={{
            padding: ' 0 1.5rem'
          }}
        >
          <H2 color="#000" margin="1rem 0 0.5rem 0">
            {this.props.posts[7].title.rendered}
          </H2>
          <P color="#000">{this.props.posts[6].title.rendered}</P>
        </div>
        <Line margin="0.5rem 0 1.25rem 1.5rem" backgroundColor="#000" />
        <Link href="/activities">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-pink)' }
                : { background: 'var(--primary-pink)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.activities[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '75%' }}>
                {this.props.posts[5].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/projects">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-purple)' }
                : { background: 'var(--primary-purple)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.projects[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '80%' }}>
                {this.props.posts[4].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/contribute">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-green)' }
                : { background: 'var(--primary-green)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.contribute[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '75%' }}>
                {this.props.posts[3].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/social">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-blue)' }
                : { background: 'var(--primary-blue)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.projects[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '76%' }}>
                {this.props.posts[2].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/info">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-red)' }
                : { background: 'var(--primary-red)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.info[0].type}
              </SmallP>
              <img src="/static/images/sgn_figure_wave_pants.gif" alt="" />
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '77%' }}>
                {this.props.posts[1].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Link href="/contact">
          <HomeCard
            style={
              isHighContrastMode
                ? { background: 'var(--secondary-yellow)' }
                : { background: 'var(--primary-yellow)' }
            }
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                height: '50%'
              }}
            >
              <SmallP margin="0.3rem 0 0 0" textDecoration="underline">
                {this.props.contact[0].type}
              </SmallP>
              <LetterBig>K</LetterBig>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                height: '50%'
              }}
            >
              <H2 style={{ width: '80%' }}>
                {this.props.posts[0].title.rendered}
              </H2>
              <ArrowRight />
            </div>
          </HomeCard>
        </Link>
        <Form
          title="Vill du kontakta oss?"
          name="Namn"
          phone="Telefonnummer"
          email="E-mail"
          submit="Skicka"
          subject="Ärende"
        />
      </Layout>
    );
  }
}

export default Home;
