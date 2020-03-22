import React, { FC } from 'react';
import {Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`\
    margin: 50px 50px;
    font-size: 30px;
    color: ${Colors.black};
`;

interface IWellcomeProps {
    myProps: string;
}

const ToDoList: FC<IWellcomeProps> = prompt => {
    return (
        <View>
            <WelcomeText>This is a ToDoList page</WelcomeText>
        </View>
    );
};

export default ToDoList;
