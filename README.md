Weather App
----------
Este é um aplicativo simples que obtém a localização atual do usuário e utiliza uma API de clima para exibir informações em tempo real sobre as condições meteorológicas.

Funcionalidades:
------
Obtém automaticamente a localização atual do usuário usando a Geolocalização do navegador.

Utiliza a API de clima (como OpenWeatherMap) para exibir dados meteorológicos em tempo real.

Exibe a temperatura, condições do tempo (ensolarado, nublado, etc.) e a cidade atual do usuário.

Interface simples e amigável.

Tecnologias Utilizadas:
------
HTML5: Para a estrutura do layout.

CSS3: Para a estilização da interface de usuário.

JavaScript: Para interagir com a API de clima e obter a localização do usuário.

API de Clima: OpenWeatherMap (ou qualquer outra API que você escolher).

Como Funciona
------
O aplicativo solicita permissão do usuário para acessar sua localização.

Após a permissão, o aplicativo utiliza a API de Geolocalização do navegador para obter a latitude e longitude do usuário.

Com as coordenadas, o aplicativo faz uma chamada para a API de clima, que retorna os dados meteorológicos da localização atual.

As informações do clima são então exibidas na interface.
