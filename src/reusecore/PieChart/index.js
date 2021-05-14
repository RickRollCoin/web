import { ResponsivePieCanvas } from '@nivo/pie'
import token from "assets/data/tokenInfo";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

export const MyResponsivePieCanvas = ({ data /* see data tab */ }) => (
    <ResponsivePieCanvas
        data={data}
        margin={{ top: 10, bottom: 25 }}
        innerRadius={0.4}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={9}
        colors={{ scheme: 'paired' }}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.6 ] ] }}
        enableArcLinkLabels={false}
        arcLabelsSkipAngle={11}
        arcLabelsTextColor="#FFFFFF"
        arcLabel={v => `${v.value}%`}
        tooltip={v => (
            <div style={{background: '#222',padding: 12, color: v.datum.color}}>
                <strong>{v.datum.value * 0.01 * token.maxTokenSupply} tokens</strong>
            </div>  
        )}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 5,
                padding: 1,
                stagger: true
            }
        ]}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateY: 25,
                itemsSpacing: 5,
                itemWidth: 80,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 14,
                symbolShape: 'circle'
            }
        ]}
    />
)