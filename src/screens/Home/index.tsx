import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import Colors from '../../constans/Colors';

const WelcomeText = styled.Text`
    margin-top: 340px;
    font-size: 20px;
    text-align: center;
    color: ${Colors.black};
`;

 interface IWelcomeProps {
     myProps: string;
 }
 
 const Home: FC<IWelcomeProps> = props => {
     return (
         <View>
             <WelcomeText>This is Home page</WelcomeText>
         </View>
     );
 };

 export default Home;