import React, { FC } from 'react';
import {ScrollView, Text, View, Image } from 'react-native';
import Layout from '../../constans/Layout';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const HomeContainer = styled.ScrollView`
    background: ${Colors.lightBlue};
    min-height: 100%;
    padding-top: ${Layout.statusBar + 10}px;
`

const ContentContainer = styled.View`
    align-items: center;
    width: 100%;
    margin-top: 10px;
    flex:1;
`

const LeftImage = styled.Image`
    align-self: flex-start;
    margin-left: 10px;
    width: 100px;
    height: 100px;
    
`;
const CircleImage = styled.Image`
    width: 100px;
    height: 100px;
    margin-top: 20px;
    flex: 1;
    border-radius: 100px;
    
`;
const RightImage = styled.Image`
    align-self: flex-end;
    margin-right: 10px;
    width: 100px;
    height: 100px;
    margin-top: 20px;
`

const OneText = styled.Text`
    width: 95%
    margin: 20px auto 0px auto;
    font-size: 17px;
    color: ${Colors.black};
 
`;
const LastText = styled(OneText)`
    margin-bottom: 50px;
`;
interface IAboutProps {
    myProps: string;
}

const About: FC<IAboutProps> = props => {
    return (
        <HomeContainer>
            <ContentContainer>
                <LeftImage source={require('../../assets/about1.png')} />
                <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
                <CircleImage source={require('../../assets/about1.png')} />
                <OneText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</OneText>
                <RightImage source={require('../../assets/about1.png')} />
                <LastText>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia sunt nam, rerum voluptatem facilis enim provident, sit at omnis mollitia unde necessitatibus ut, optio explicabo libero repellat adipisci obcaecati veniam. Lorem ipsum dolor sit amet consectetur adipisicing elit.</LastText>
                
            </ContentContainer>
        </HomeContainer>
    );
};
export default About;