import React, { FC, useState } from 'react';
import { Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Layout from '../../constans/Layout';


import Colors from '../../constans/Colors';

import Form from '../../compnents/Form';
import TodoList from '../../compnents/TodoList';

const HomeView = styled.ScrollView`
    min-height: 100%;
    background: ${Colors.lightBlue};
    padding-top: ${Layout.statusBar + 10}px;
`;


const TodoListScreen = ({navigation}) => {
    const [FormViwe, setFromView] = useState<boolean>(false);

    return (
        <HomeView>
            {FormViwe ? (
                <Form switchView={setFromView}/>
            ) : (
                <TodoList switchView={setFromView}/>
            )}
        </HomeView>
        
    );
};

export default TodoListScreen;