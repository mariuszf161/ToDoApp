import React, { FC } from 'react';
import { Text, View, Image } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 120px 20px;
    font-size: 30px;
    color: ${Colors.black};
`;
const AbouText = styled.Text`
    font-size: 15px;
    margin-top: 430px;
    margin-left: 95px;
    font-weight: bold;
`;


interface IWelcomeProps {
    myProps: string;
}

const About: FC<IWelcomeProps> = props => {
    return (
        <View>
            <WelcomeText> ToDo List Application</WelcomeText>
            <AbouText>Created by Mariusz Franik</AbouText>    
        </View>
        
    );
};

export default About;