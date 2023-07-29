import React from 'react'
import PropTypes from 'prop-types'
import ReactECharts from 'echarts-for-react'
import echarts from 'echarts';

const Chart = (props) => {
    var colorPalette = [
        '#d87c7c',
        '#919e8b',
        '#d7ab82',
        '#6e7074',
        '#61a0a8',
        '#efa18d',
        '#787464',
        '#cc7e63',
        '#724e58',
        '#4b565b'
    ];
    const theme = {
        color: colorPalette,
        // backgroundColor: '#fef8ef',
        backgroundColor: '',
        graph: {
            color: colorPalette
        }
    }

    return (
        <div className="chart" style={{ width: props.width }}>
            {props.label && (<div className="label-area">{props.label}</div>)}
            <ReactECharts
                option={props.options}
                notMerge={true}
                lazyUpdate={true}
                theme={theme}
            />
        </div>
    )
}

Chart.propTypes = {
    options: PropTypes.object,
    label: PropTypes.object,
    width: PropTypes.object,
}

export default Chart
