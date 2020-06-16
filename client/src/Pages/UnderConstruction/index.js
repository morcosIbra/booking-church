import React from 'react';
import { connect } from 'react-redux';
import InfoBar from '../../Components/InfoBar';
import Title from '../../Components/Title';

const UnderConstruction = ({ title, subTitle, infoTitle, info }) => (
    <div>
        {/* <img src="/public/st-george.jpg" class="rounded mx-auto d-block" alt="..." /> */}

        <Title title={title} classes='mb-3 mt-3 text-center'
            subTitle={subTitle} />
        <InfoBar title={infoTitle} type="info" items={info} classes='mb-3' />

    </div>
)

const mapStateToProps = state => ({
    title: state.common.underConstruction.title,
    subTitle: state.common.underConstruction.subTitle,
    infoTitle: state.common.info.title,
    info: state.common.underConstruction.info,
})


export default connect(mapStateToProps)(UnderConstruction)
