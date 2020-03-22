import React, { FC } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin: 100px 10px;
    font-size: 50px;
    color: ${Colors.black};
`;
interface IWelcomeProps {
    myProps: string;
}
const AddNote: FC<IWelcomeProps> = props => {
    return (
        <View>
            <WelcomeText>This is page AddNote</WelcomeText>
        </View>
    );
};
export default AddNote;