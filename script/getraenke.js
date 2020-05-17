window.addEventListener('load', () => {
    ratsherrn.addEventListener('click', () => {
        window.location.href = 'freistaedterRatsherrn/index.html';
    })

    ratsherrn.addEventListener('mouseover', () => {
        ratsherrnInfo.style.display = 'grid';
    })

    ratsherrn.addEventListener('mouseout', () => {
        ratsherrnInfo.style.display = 'none';
    })

    maerzn.addEventListener('click', () => {
        window.location.href = 'freistaedterMaerzn/index.html';
    })

    maerzn.addEventListener('mouseover', () => {
        maerznInfo.style.display = 'grid';
    })

    maerzn.addEventListener('mouseout', () => {
        maerznInfo.style.display = 'none';
    })

    schlaegl.addEventListener('click', () => {
        window.location.href = 'schläglUrquell/index.html';
    })

    schlaegl.addEventListener('mouseover', () => {
        schlaeglInfo.style.display = 'grid';
    })

    schlaegl.addEventListener('mouseout', () => {
        schlaeglInfo.style.display = 'none';
    })

    zipfer.addEventListener('click', () => {
        window.location.href = 'zipfer/index.html';
    })

    zipfer.addEventListener('mouseover', () => {
        zipferInfo.style.display = 'grid';
    })

    zipfer.addEventListener('mouseout', () => {
        zipferInfo.style.display = 'none';
    })
})