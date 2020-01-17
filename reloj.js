(function(){
    var actualizarHora = function(){
        var fecha = new Date(),
            diaSemana = fecha.getDay(),
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            year = fecha.getFullYear(),
            hora = fecha.getHours(),
            minutos = fecha.getMinutes(),
            ampm,
            segundos = fecha.getSeconds();
        
        var pDiaSemana = document.getElementById('diaSem'),
            pDia = document.getElementById('dia'),
            pMes = document.getElementById('mes'),
            pYear = document.getElementById('year'),
            pHora = document.getElementById('horas'),
            pMinutos = document.getElementById('minutos'),
            pAmpm = document.getElementById('ampm'),
            pSegundos = document.getElementById('segundos');

        var semana = ['Domingo', 'Lunes', 'Mertes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Noviembre', 'Diciembre'];
        pMes.textContent = meses[mes];
        pYear.textContent = year;

        if (hora>12){
            hora = hora -12;
            ampm ='PM'
        }else{ampm ='AM'}
        if(hora == 0){
            hora =12;
        }
        pAmpm.textContent = ampm;
        pHora.textContent = hora;
        if (minutos <10){
            minutos = '0' + minutos;
        }
        pMinutos.textContent = minutos;
        if (segundos <10){
            segundos = '0' + segundos;}
        pSegundos.textContent = segundos;
    };
    actualizarHora();
    var intervalo = setInterval(actualizarHora, 1000);

}())