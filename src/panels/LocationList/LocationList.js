import React from 'react';
import PropTypes from 'prop-types';

import { Group, List, Panel, PanelHeader, PanelHeaderBack, SimpleCell } from '@vkontakte/vkui';

import './LocationList.css';

const LocationList = props => {
    console.log(12345);

    return (
        <Panel id={props.id} className="locations">
            <PanelHeader
                left={<PanelHeaderBack onClick={props.go} data-to="home" />}
            >
                Список локаций
            </PanelHeader>
            <Group>
                <List className="locations__list list">
                    <SimpleCell className="list__item">Киберполигон</SimpleCell>
                    <SimpleCell className="list__item">Набережная</SimpleCell>
                    <SimpleCell className="list__item">Сбербанк</SimpleCell>
                    <SimpleCell className="list__item">D732</SimpleCell>
                    <SimpleCell className="list__item">Общежитие №9</SimpleCell>
                    <SimpleCell className="list__item">ВездеКод</SimpleCell>
                </List>
            </Group>
        </Panel>
    );
}

LocationList.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default LocationList;
