# Plano do teste A/B

## Hipotese
O Kit Escritorio Premium nao vende como deveria porque o beneficio de compra nao aparece de forma clara: a descricao e generica e a chamada para acao nao informa valor nem urgencia. A variante espera aumentar a conversao ao tornar os beneficios, a oferta em parcelas, o estoque limitado e a prova social mais visiveis.

## Local aplicado
Pagina de detalhes do produto principal, acima e ao redor do botao de compra.

## Versao A - controle
Arquivo: `product-page-control.html`
Mantem a apresentacao original: titulo, preco integral, descricao generica, botao verde "Adicionar ao Carrinho" e caracteristicas.

## Versao B - variante
Arquivo: `product-page-variant.html`
Alteracoes mensuraveis:
- Selo "Mais vendido para escritorios";
- Texto "OFERTA LIMITADA";
- Parcelamento em tres vezes sem juros;
- Lista explicita de tres beneficios;
- Estoque limitado com quantidade;
- Avaliacao de 4,8/5 com 126 compradores;
- Botao laranja com texto contendo preco.

## Ferramenta
Optimizely ou VWO em ambiente de producao. Para o entregavel local, a divisao pode ser feita por um redirecionamento simples com cookie.

## Trafego e periodo
- Divisao 50/50 entre A e B.
- Usuarios devem permanecer na mesma versao por meio de cookie ou user ID.
- Duracao minima: 2 semanas, para cobrir dias de semana e fim de semana.
- Duracao maxima: 4 semanas ou ate atingir a amostra necessaria, evitando parar o teste cedo.

## Metricas
- KPI primario: taxa de clique no botao de adicionar ao carrinho por visitante da pagina.
- Secundarias: taxa de adicao real ao carrinho, taxa de checkout iniciado, taxa de compra, receita por visitante e ticket medio.
- Guardrail: taxa de rejeicao, taxa de erro e tempo de permanencia.

## Analise
Usar Google Analytics 4 para eventos e VWO/Optimizely para atribuicao das variantes. Confirmar relevancia estatistica com p-valor menor que 0,05 e intervalo de confianca de 95%. Validar amostra e volume por teste de conversao antes de encerrar.

## Recomendacao
Se a Variante B aumentar o KPI principal sem piorar guardrails, publicar a variante como versao oficial. Se houver empate, manter o controle. Se houver queda, interromper o teste e reavaliar a hipotese.
