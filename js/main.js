window.onload = function() {
    'use strict';

    const srcOpenness               = './data/openness.csv';
    const srcOpenAtSchool           = './data/open-at-school.csv';
    const srcSchoolAdressingIssues  = './data/school-adressing-lgbti-issues.csv';
    const srcLeavingSchool          = './data/leaving-school.csv';
    const srcOpenToSchoolmates      = './data/open-to-schoolmates.csv';
    const srcOpenAtWork             = './data/open-at-work.csv';
    const srcOpenToColleagues       = './data/open-to-colleagues.csv';
    const srcOpenToSuperiors        = './data/open-to-superiors.csv';
    const srcOpenToClients          = './data/open-to-clients.csv';
    const srcDiscriminationWork     = './data/discrimination-work.csv';
    const srcNegativeCommentsSchool = './data/negative-comments-school.csv';
    const srcSupportSchool          = './data/support-school.csv';

    const canvas = {
        width: window.innerWidth,
        height: 3000,
    }

    const color = {
        transparent: 'rgba(0, 0, 0, 0)',
        contour: '#e1e1e1',
        france: '#ddddff',
        eu: 'black'
    }

    const svg = d3.select('#container')
        .append('svg')
        .attr('width', canvas.width)
        .attr('height', canvas.height);

    function answer(data, answer) {
        let newData = data.filter(d => d.answer == answer);
        return newData;
    }

    function drawCircle(x, y, radius, color, stroke) {
        svg.append('ellipse')
            .attr('cx', x)
            .attr('cy', y)
            .attr('rx', radius)
            .attr('ry', radius)
            .attr('fill', color)
            .attr('stroke', stroke)
    }

    function drawData(data, height) {
        let x = 110;
        let y = height;
        for (let i = 0 ; i < data.length / 2 ; i ++) {
            let eu = data[i + data.length / 2];
            drawCircle(x, y, 100, color.transparent, color.contour);
            drawCircle(x, y, data[i].percentage, color.france, null);
            drawCircle(x, y, eu.percentage, color.transparent, color.eu);
            x += 220;

            svg.append('text')
                .attr('x', 250)
                .attr('y', height)
                .text(data[i].question_label)

            /* svg.append('text')
                .attr('x', 250)
                .attr('y', height + 25)
                .text(data[i].answer) */
        }
    }

    d3.csv(srcOpenness).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Very open');
        drawData(data, 110);
    });

    d3.csv(srcOpenAtSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Very open');
        drawData(data, 330);
    });

    d3.csv(srcSchoolAdressingIssues).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'No');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        drawData(data, 550);
    });

    d3.csv(srcLeavingSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Yes');
        drawData(data, 770);
    });

    d3.csv(srcOpenToSchoolmates).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'All');
        drawData(data, 990);
    });

    d3.csv(srcOpenAtWork).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Very open');
        drawData(data, 1220);
    });

    d3.csv(srcOpenToColleagues).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'All');
        drawData(data, 1440);
    });

    d3.csv(srcOpenToSuperiors).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'All');
        drawData(data, 1660);
    });

    d3.csv(srcOpenToClients).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'All');
        drawData(data, 1880);
    });

    d3.csv(srcDiscriminationWork).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Yes');
        drawData(data, 2110);
    });

    d3.csv(srcNegativeCommentsSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Never');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        drawData(data, 2330);
    });

    d3.csv(srcSupportSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
        data = answer(data, 'Never');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        drawData(data, 2550);
    });
}