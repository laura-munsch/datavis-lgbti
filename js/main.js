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

    d3.csv(srcOpenness).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenAtSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcSchoolAdressingIssues).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcLeavingSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenToSchoolmates).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenAtWork).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenToColleagues).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenToSuperiors).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcOpenToClients).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcDiscriminationWork).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcNegativeCommentsSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });

    d3.csv(srcSupportSchool).then((data, error) => {
        if (error) throw error;

        // traitement des données...
        console.log(data);
    });
}