export const RemoveDatasRepetidas = (datas) => {
    const DatasUnicas = [];

    datas.forEach((data) => {
        if (DatasUnicas.indexOf(data.dataFormatada) === -1) {
            DatasUnicas.push(data.dataFormatada);
        };

        return DatasUnicas;
    });
};

export const OrdenaData = (data) => {
    data.sort((a, b) => {
        const primeiraData = moment(a, 'DD/MM/YYYY').format('YYYYMMDD');
        const segundaData = moment(b, 'DD/MM/YYYY').format('YYYYMMDD');

        return primeiraData - segundaData;
    });
};