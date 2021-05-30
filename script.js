let countyJson = 'counties.json'
let poverty_json = 'pov.json'


let countyData
let povertyData

let canvas = d3.select('#canvas') //2021
let canvas_b = d3.select('#canvas_b') //2020
let canvas_c = d3.select('#canvas_c') //2019
let canvas_d = d3.select('#canvas_d') //2019 vs 2021
let tooltip = d3.select('#tooltip')

let drawMap = () => {
    d3.select('#text_a').selectAll('text').text("Hello")
    // 2021
    canvas.selectAll('path')
            .data(countyData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('class', 'county')
            .attr('fill', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })
                let percents = county['21_child_pov']
                if (percents <= 15){
                    return '#89CFF0'
                } else if(percents <= 20) {
                    return '#6CB4EE'
                } else if(percents <= 25) {
                    return '#318CE7'
                } else if(percents <= 35) {
                    return '#0039a6'
                } else if(percents > 35){
                    return 'red'
                }
            })
            .attr('data-fips', (countyDataItem) => {
                return countyDataItem['id']
            })
            .attr('data-poverty', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })
                let percents = county['21_child_pov']
                return percents
            })
            .on('mouseover', (countyDataItem)=> {
                tooltip.transition()
                    .style('visibility', 'visible')

                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })

                tooltip.text(county['area_name'] + ', ' +county['state'] + ': ' + county['21_child_pov'] + '% Child. on Poverty.')

                var x = d3.event.pageX;
                var y = d3.event.pageY;
                

                tooltip.attr('data-poverty', county['21_child_pov'] )
                        .style('left', x + 'px')
                        .style('top', y + 'px')
                        .style('opacity', 1)
            })
            .on('mouseout', (countyDataItem) => {
                tooltip.transition()
                    .style('visibility', 'hidden')
            })

    // 2020
    canvas_b.selectAll('path')
    .data(countyData)
    .enter()
    .append('path')
    .attr('d', d3.geoPath())
    .attr('class', 'county')
    .attr('fill', (countyDataItem) => {
        let id = countyDataItem['id']
        let county = povertyData.find((item) => {
            return item['fips'] === id
        })
        let percents = county['20_child_pov']
        if (percents <= 15){
            return '#89CFF0'
        } else if(percents <= 20) {
            return '#6CB4EE'
        } else if(percents <= 25) {
            return '#318CE7'
        } else if(percents <= 35) {
            return '#0039a6'
        } else if(percents > 35){
            return 'red'
        }
    })
    .attr('data-fips', (countyDataItem) => {
        return countyDataItem['id']
    })
    .attr('data-poverty', (countyDataItem) => {
        let id = countyDataItem['id']
        let county = povertyData.find((item) => {
            return item['fips'] === id
        })
        let percents = county['20_child_pov']
        return percents
    })
    .on('mouseover', (countyDataItem)=> {
        tooltip.transition()
            .style('visibility', 'visible')

        let id = countyDataItem['id']
        let county = povertyData.find((item) => {
            return item['fips'] === id
        })

        tooltip.text(county['area_name'] + ', ' +county['state'] + ': ' + county['20_child_pov'] + '% Child. on Poverty.')

        var x = d3.event.pageX;
        var y = d3.event.pageY;
        

        tooltip.attr('data-poverty', county['20_child_pov'] )
                .style('left', x + 'px')
                .style('top', y + 'px')
                .style('opacity', 1)
    })
    .on('mouseout', (countyDataItem) => {
        tooltip.transition()
            .style('visibility', 'hidden')
    })

    // 2019
    canvas_c.selectAll('path')
            .data(countyData)
            .enter()
            .append('path')
            .attr('d', d3.geoPath())
            .attr('class', 'county')
            .attr('fill', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })
                let percents = county['19_child_pov']
                if (percents <= 15){
                    return '#89CFF0'
                } else if(percents <= 20) {
                    return '#6CB4EE'
                } else if(percents <= 25) {
                    return '#318CE7'
                } else if(percents <= 35) {
                    return '#0039a6'
                } else if(percents > 35){
                    return 'red'
                }
            })
            .attr('data-fips', (countyDataItem) => {
                return countyDataItem['id']
            })
            .attr('data-poverty', (countyDataItem) => {
                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })
                let percents = county['19_child_pov']
                return percents
            })
            .on('mouseover', (countyDataItem)=> {
                tooltip.transition()
                    .style('visibility', 'visible')

                let id = countyDataItem['id']
                let county = povertyData.find((item) => {
                    return item['fips'] === id
                })

                tooltip.text(county['area_name'] + ', ' +county['state'] + ': ' + county['19_child_pov'] + '% Child. on Poverty.')

                var x = d3.event.pageX;
                var y = d3.event.pageY;
                

                tooltip.attr('data-poverty', county['19_child_pov'] )
                        .style('left', x + 'px')
                        .style('top', y + 'px')
                        .style('opacity', 1)
            })
            .on('mouseout', (countyDataItem) => {
                tooltip.transition()
                    .style('visibility', 'hidden')
            })

    // 2019 vs 2021
    canvas_d.selectAll('path')
        .data(countyData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'county')
        .attr('fill', (countyDataItem) => {
            let id = countyDataItem['id']
            let county = povertyData.find((item) => {
                return item['fips'] === id
            })
            let change = county['decrease1921']
            if (change == 1){
                // return '#92c3ad'
                return "cornflowerblue"
            } else if(change == 0) {
                return 'royalblue'
                // return '#f3d38c'
            } else if(change == -1){
                return 'darkorange'
            }
        })
        .attr('data-fips', (countyDataItem) => {
            return countyDataItem['id']
        })
        .attr('data-poverty', (countyDataItem) => {
            let id = countyDataItem['id']
            let county = povertyData.find((item) => {
                return item['fips'] === id
            })
            let percents = county['decrease1921']
            return percents
        })
        .on('mouseover', (countyDataItem)=> {
            tooltip.transition()
                .style('visibility', 'visible')

            let id = countyDataItem['id']
            let county = povertyData.find((item) => {
                return item['fips'] === id
            })

            tooltip.text(county['area_name'] + ', ' +county['state'] + ': ' + county['change1921'] + '% Changes.')

            var x = d3.event.pageX;
            var y = d3.event.pageY;

            tooltip.attr('data-poverty', county['decrease1921'] )
                    .style('left', x + 'px')
                    .style('top', y + 'px')
                    .style('opacity', 1)
        })
        .on('mouseout', (countyDataItem) => {
            tooltip.transition()
                .style('visibility', 'hidden')
        })
}

d3.json(countyJson).then(
    (data, error) => {
        if(error){
            console.log(log)
        }else{
            countyData = topojson.feature(data, data.objects.counties).features
            console.log(countyData)

            d3.json(poverty_json).then(
                (data, error) => {
                    if(error){
                        console.log(error)
                    }else{
                        povertyData = data
                        console.log(povertyData)
                        drawMap()
                    }
                }
            )
        }
    }
)