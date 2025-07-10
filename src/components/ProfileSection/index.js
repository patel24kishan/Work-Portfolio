import React from 'react';
import { styled } from 'styled-components';
import ProfileBgAnimation from '../ProfileBgAnimation';
import { ProfileContainer, ProfileBg, ProfileLeftContainer, ProfileImg, ProfileRightContainer, ProfileInnerContainer, TextLoop, Title, Span, Description,SocialMediaIcons,SocialMediaIcon, ResumeButton, ItchButton } from './ProfileStyle';
import ProfileImage from '../../images/ProfileImage.jpg';
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';

const Profile=()=>{
    return (
    <div id="about">
            <ProfileContainer>
                <ProfileBg>
                    <ProfileBgAnimation/>
                </ProfileBg>
                <ProfileInnerContainer>
                    <ProfileLeftContainer>
                        <Title>
                            Hello, I am <br/>{Bio.name}
                        </Title>
                        <TextLoop>
                            I am 
                            <Span>
                                <Typewriter
                                 options={{
                                    strings: Bio.roles,
                                    autoStart: true,
                                    loop: true,
                                }}/>
                            </Span>
                        </TextLoop>
                        <Description>{Bio.description}</Description>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Other content in the column can go here */}

      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '2px' }}>
      <ResumeButton href={Bio.resume_softwaredeveloper} target="_blank">  R E S U M E </ResumeButton>
       <ItchButton href={Bio.github} target="_blank">  Github  </ItchButton>
      </div>
      </div>   
                    </ProfileLeftContainer>
                    <ProfileRightContainer>
                                <ProfileImg src={ProfileImage} alt="Profile"/>
                    </ProfileRightContainer>
                </ProfileInnerContainer>
            </ProfileContainer>
    </div>)
}

export default Profile;