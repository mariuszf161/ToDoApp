import React, { FC, useState } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import styled from 'styled-components';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';
import { useSelector, useDispatch } from 'react-redux';

import { ISingleElementList } from '../enitities/todoSingleEL';
import Layout from '../constans/Layout'
import { removeElemTodoList } from '../actions/todoListActions';
import Colors from '../constans/Colors'


const Wrapper = styled.View`
    margin: 0 20px 0 20px;
    margin-top: 10px;
    flex:1;
`;

const SingleElementList = styled.View`
    padding: 0px 10px;
    background: ${Colors.lightBlue};
    margin-bottom: 20px;
`;
const NameText = styled.Text`
    font-size: 25px;
    text-align: center;
    align-items: center;
    background: white;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
`;
const DescText = styled.Text`
    font-size: 20px;
    background: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 0 0 5px 10px;
`;
const AddButtonContainer = styled.TouchableHighlight`
    margin: 0px auto 20px auto;
    margin-bottom: 50px;
`
const RemoveButtonContainer = styled.TouchableHighlight`
    align-self: flex-end;  
    background: ${Colors.white};
    margin-top: -55px;
    margin-right: 10px;

`
const TitleText = styled.Text`
    font-size: 30px;
    color: #0066FF;
    text-align: center;
    margin-bottom: 10px;
`;

type RemoveElem = ReturnType<typeof removeElemTodoList>;

const TodoList: FC<{switchView(formView: boolean)}> = props => {
    const dispatch = useDispatch();
    const todoListState = useSelector<IState, ITodoListReducer>(state => state.todoList)
    const goToForm = () => {
        props.switchView(true)
    }

    const deleteElem = (id: number) => {
        dispatch<RemoveElem>(removeElemTodoList(id));
    }
    return (
        <Wrapper>
            <TitleText>Moje zadania</TitleText>
            {todoListState.todoList.map((elem: ISingleElementList, index: number) =>
                <SingleElementList key={index}>
                    <NameText>{elem.name}</NameText>
                    <DescText>{elem.description}</DescText>
                    <RemoveButtonContainer onPress={() => deleteElem(elem.id)}>   
                <MaterialCommunityIcons
                name='minus-circle'
                color='#0066FF'
                size={40} />
                </RemoveButtonContainer>
                </SingleElementList>
            )}
            
            <AddButtonContainer onPress={goToForm} activeOpacity={1} underlayColor={'transparent'}>   
            <MaterialCommunityIcons
                name='plus-circle'
                color='#0066FF'
                size={70} />
            </AddButtonContainer>
        </Wrapper>
    )
};

export default TodoList;