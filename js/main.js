window.onload = function() {
    'use strict';

    const btnAll = document.getElementById('data-all');
    const btnLesbians = document.getElementById('data-lesbians');
    const btnGay = document.getElementById('data-gay');
    const btnTrans = document.getElementById('data-trans');
    const btnIntersex = document.getElementById('data-intersex');

    const allData = [];

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
        height: window.innerHeight - 5,
    }

    const colors = {
        transparent: 'rgba(0, 0, 0, 0)',
        contour: '#e1e1e1',
        france: '#ddddff',
        europe: 'black'
    }

    const svg = d3.select('#container')
        .append('svg')
        .attr('width', canvas.width)
        .attr('height', canvas.height);

    function answer(data, answer) {
        let newData = data.filter(d => d.answer == answer);
        return newData;
    }

    function logData(data, width, height, size) {
        let eu = data.filter(d => d.CountryCode == "EU-28" && d.target_group == "All")[0];
        let fr = data.filter(d => d.CountryCode == "France" && d.target_group == "All")[0];
        let euLesbians = data.filter(d => d.CountryCode == "EU-28" && d.target_group == "Lesbian women")[0];
        let frLesbians = data.filter(d => d.CountryCode == "France" && d.target_group == "Lesbian women")[0];
        let euGay = data.filter(d => d.CountryCode == "EU-28" && d.target_group == "Gay men")[0];
        let frGay = data.filter(d => d.CountryCode == "France" && d.target_group == "Gay men")[0];
        let euTrans = data.filter(d => d.CountryCode == "EU-28" && d.target_group == "Trans people")[0];
        let frTrans = data.filter(d => d.CountryCode == "France" && d.target_group == "Trans people")[0];
        let euIntersex = data.filter(d => d.CountryCode == "EU-28" && d.target_group == "Intersex people")[0];
        let frIntersex = data.filter(d => d.CountryCode == "France" && d.target_group == "Intersex people")[0];

        allData.push({
            eu: eu,
            fr: fr,
            eu_lesbians: euLesbians,
            fr_lesbians: frLesbians,
            eu_gay: euGay,
            fr_gay: frGay,
            eu_trans: euTrans,
            fr_trans: frTrans,
            eu_intersex: euIntersex,
            fr_intersex: frIntersex,
            width: width,
            height: height,
            size: size
        });
    }

    d3.csv(srcOpenness).then((data, error) => {
        if (error) throw error;
        data = answer(data, 'Very open');
        logData(data, canvas.width / 2, 180, 150);
    });

    d3.csv(srcOpenAtSchool).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Very open');
        logData(data, (canvas.width / 2) - 290, 340, 100);
    });

    d3.csv(srcSchoolAdressingIssues).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'No');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        logData(data, (canvas.width / 2) - 450, 200, 75);
    });

    d3.csv(srcLeavingSchool).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Yes');
        logData(data, (canvas.width / 2) - 490, 380, 75);
    });

    d3.csv(srcNegativeCommentsSchool).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Never');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        logData(data, (canvas.width / 2) - 370, 530, 75);
    });

    d3.csv(srcOpenToSchoolmates).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'All');
        logData(data, (canvas.width / 2) - 180, 520, 75);
    });

    d3.csv(srcSupportSchool).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Never');
        data.forEach(d => {
            d.percentage = 100 - d.percentage;
        });
        logData(data, (canvas.width / 2) - 420, 665, 50);
    });

    d3.csv(srcOpenAtWork).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Very open');
        logData(data, (canvas.width / 2) + 290, 340, 100);
    });

    d3.csv(srcDiscriminationWork).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'Yes');
        logData(data, (canvas.width / 2) + 450, 200, 75);
    });

    d3.csv(srcOpenToColleagues).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'All');
        logData(data, (canvas.width / 2) + 490, 380, 75);
    });

    d3.csv(srcOpenToSuperiors).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'All');
        logData(data, (canvas.width / 2) + 370, 530, 75);
    });

    d3.csv(srcOpenToClients).then((data, error) => {
        if (error) throw error;

        data = answer(data, 'All');
        logData(data, (canvas.width / 2) + 180, 520, 75);
    });

    Promise.all([
        d3.csv(srcOpenness),
        d3.csv(srcOpenAtSchool),
        d3.csv(srcSchoolAdressingIssues),
        d3.csv(srcLeavingSchool),
        d3.csv(srcNegativeCommentsSchool),
        d3.csv(srcOpenToSchoolmates),
        d3.csv(srcSupportSchool),
        d3.csv(srcOpenAtWork),
        d3.csv(srcDiscriminationWork),
        d3.csv(srcOpenToColleagues),
        d3.csv(srcOpenToSuperiors),
        d3.csv(srcOpenToClients)
    ]).then(() => {
        console.log(allData);

        let selection = svg.selectAll('ellipse').data(allData);

        selection
            .enter()
            .append('ellipse')
            .attr('cx', d => d.width)
            .attr('cy', d => d.height)
            .attr('rx', d => d.size)
            .attr('ry', d => d.size)
            .attr('fill', colors.transparent)
            .attr('stroke', colors.contour);

        let franceCircle = selection
            .enter()
            .append('ellipse')
            .attr('cx', d => d.width)
            .attr('cy', d => d.height)
            .attr('fill', colors.france)
            .attr('stroke', colors.transparent);

        let euCircle = selection
            .enter()
            .append('ellipse')
            .attr('cx', d => d.width)
            .attr('cy', d => d.height)
            .attr('fill', colors.transparent)
            .attr('stroke', colors.europe);

        franceCircle
            .attr('rx', d => d.fr.percentage * d.size / 100)
            .attr('ry', d => d.fr.percentage * d.size / 100);

        euCircle
            .attr('rx', d => d.eu.percentage * d.size / 100)
            .attr('ry', d => d.eu.percentage * d.size / 100);


        btnAll.addEventListener('click', () => {
            franceCircle
                .attr('rx', d => d.fr.percentage * d.size / 100)
                .attr('ry', d => d.fr.percentage * d.size / 100);

            euCircle
                .attr('rx', d => d.eu.percentage * d.size / 100)
                .attr('ry', d => d.eu.percentage * d.size / 100);
        });

        btnLesbians.addEventListener('click', () => {
            franceCircle
                .attr('rx', d => d.fr_lesbians.percentage * d.size / 100)
                .attr('ry', d => d.fr_lesbians.percentage * d.size / 100);

            euCircle
                .attr('rx', d => d.eu_lesbians.percentage * d.size / 100)
                .attr('ry', d => d.eu_lesbians.percentage * d.size / 100);
        });

        btnGay.addEventListener('click', () => {
            franceCircle
                .attr('rx', d => d.fr_gay.percentage * d.size / 100)
                .attr('ry', d => d.fr_gay.percentage * d.size / 100);

            euCircle
                .attr('rx', d => d.eu_gay.percentage * d.size / 100)
                .attr('ry', d => d.eu_gay.percentage * d.size / 100);
        });

        btnTrans.addEventListener('click', () => {
            franceCircle
                .attr('rx', d => d.fr_trans.percentage * d.size / 100)
                .attr('ry', d => d.fr_trans.percentage * d.size / 100);

            euCircle
                .attr('rx', d => d.eu_trans.percentage * d.size / 100)
                .attr('ry', d => d.eu_trans.percentage * d.size / 100);
        });

        btnIntersex.addEventListener('click', () => {
            franceCircle
                .attr('rx', d => d.fr_intersex.percentage * d.size / 100)
                .attr('ry', d => d.fr_intersex.percentage * d.size / 100);

            euCircle
                .attr('rx', d => d.eu_intersex.percentage * d.size / 100)
                .attr('ry', d => d.eu_intersex.percentage * d.size / 100);
        });
    });
}