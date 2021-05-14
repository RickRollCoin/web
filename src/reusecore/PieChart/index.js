import { ResponsivePieCanvas } from '@nivo/pie'
import token from "assets/data/tokenInfo";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

function getLegends(width){
    return width < 400 
    ?  [
        {
            anchor: 'right',
            direction: 'column',
            justify: false,
            translateY: 10,
            itemsSpacing: 14,
            itemWidth: 75,
            itemHeight: 28,
            itemTextColor: '#999',
            itemDirection: 'top-to-bottom',
            itemOpacity: 1,
            symbolSize: 20,
            symbolShape: 'diamond'
        }] 
    : 
        [
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateY: 25,
                itemsSpacing: 5,
                itemWidth: 75,
                itemHeight: 14,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'diamond'
            }
        ]};

export const MyResponsivePieCanvas = ({ data, width }) => (
    <ResponsivePieCanvas
        data={data}
        margin={{ top: 10, bottom: width < 400 ? 100 : 30 }}
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
        legends={getLegends(width)}
    />
)