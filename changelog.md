# Changelog

## [v0.3](#) - JuL 01, 2024 [Gulak]

### Ajuste
- Modificação no arquivo `mobile.html`.
  - Classe ocultada `home__scroll` de `home__secundary`.

## [v0.2.1](https://github.com/yaknayshvydshe/yaknayshvydshe/commit/0529dd1989377c25e9c0869a16d8de45154635e5) - Jun 27, 2024 [Gulak]

### Ajuste
- Modificação no arquivo `mobile.html` para ajustar o idioma da página para português.
  - O logotipo  foi reposicionado do topo superior direito para o topo superior esquerdo, onde estava o menu. 
    -  O arquivo `mobile.css` e `mobile.scss` e sua classe `__icon` teve seu campo de espaço substituído pela classe `__toggle` no parâmetro `nav`.


## [v0.2](https://github.com/yaknayshvydshe/yaknayshvydshe/commit/6473893c9869bc32cc27812a8f2fdb19da865918) - Jun 27, 2024 [Gulak]

### Corrigido
- Correção de bug em dispositivos Android e iOS.

### Adicionado
- Redirecionamento da folha de rosto `index.html` para `mobile.html` se o usuário estiver em um dispositivo móvel (Android, iPhone, iPad, tablets).
  - Quando um usuário clica no botão com a classe `trigger`, ele será redirecionado para `mobile.html` se estiver em um dispositivo móvel.
    - Criados arquivos `mobile.css`, `mobile.scss` e `mobile.js` para o suporte a dispositivos móveis.

## [v0.1](https://github.com/yaknayshvydshe/yaknayshvydshe/commit/1c5c2831d4c26fcf83b258d23e10bb81aaa6d6a3) - Jun 26, 2024 [Gulak]

### Atualização
- Atualização em raíz de indexação:
  - O arquivo `index.html` não estava carregando corretamente porque estava localizado dentro da pasta `dist`. 
    - Foi movido o arquivo `index.html` para a raíz do projeto garantido que seja indexado corretamente pelos serviços de back-end.

### Ajuste
- Ajuste no tamanho do campo de texto das letras na folha de rosto.
  - A classe `portfolio_home__title` teve seu campo limitado para garantir melhor legibilidade e consistência visual na folha de rosto.

### Melhoria
- Implementação básica no SEO para aumentar a visibilidade nos mecanismos de busca.

## [init](https://github.com/yaknayshvydshe/yaknayshvydshe/commit/7ed129125c62a76513e2a03023fecc0d9fb0e653) - Jun 25, 2024 [Gulak]

### Inicialização
- Configuração básica e estrutura inicial de diretórios `dist` e `src`.

### Planejamento 
- Fechar parcerias.