import React, { Component } from 'react';

import './templateCard.css';
import config from '../../../../config';

const httpsReg = /http(?:s)?/;

class TemplateCard extends Component {
    render() {
        const { iconUrl, name, id, templateId, handleSeleteTemplate } = this.props;
        const src = httpsReg.test(iconUrl) ? iconUrl : `${config.codingUrl}${iconUrl}`;
        return (
            <div className={`com-card template-card${templateId === id ? ' seleted' : ''}`} onClick={() => handleSeleteTemplate(id)}>
                <div className="inner">
                    <div className="avatar">
                        <img src={src} alt="avatar" />
                    </div>
                    <div className="title" title={name}>{name}</div>
                    <div className="mark">
                        <i className="fa fa-check"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default TemplateCard;
