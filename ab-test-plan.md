# Plano do teste A/B - OfficeSupply Online

## Hipótese
O Kit Escritório Premium pode estar vendendo abaixo do esperado porque seus benefícios e sua proposta de valor não ficam claros na página. Destacar os benefícios, as condições de pagamento e uma chamada para ação mais específica pode aumentar a intenção de compra, medida por cliques no botão.

## Local de aplicação
Página de detalhes do Kit Escritório Premium.

## Versões
- **A - Controle:** [product-page-control.html](product-page-control.html), apresentação original do produto.
- **B - Variante:** [product-page-variant.html](product-page-variant.html), apresenta benefícios em destaque, parcelamento, selo promocional e chamada para ação com o preço.

Antes de usar a variante em uma loja real, confirmar que alegações promocionais, quantidade em estoque, avaliações e condições de pagamento são verdadeiras e atuais.

## Ferramentas e configuração
- **Publicação:** GitHub Pages.
- **Análise de sessões e cliques:** Microsoft Clarity, instalado nas duas versões.
- **Atribuição:** a página inicial sorteia A ou B com probabilidade 50/50 e guarda a escolha no `localStorage` do navegador. O mesmo navegador retorna à mesma variante enquanto os dados locais não forem apagados.
- **Eventos de clique:** `ab_control_add_to_cart_click` e `ab_variant_add_to_cart_click`.

Links publicados:
- Entrada do teste: https://juh02app-droid.github.io/prova-p2-ux/
- Controle A: https://juh02app-droid.github.io/prova-p2-ux/product-page-control.html
- Variante B: https://juh02app-droid.github.io/prova-p2-ux/product-page-variant.html

## Duração
Executar por no mínimo 14 dias e no máximo 28 dias, cobrindo dias úteis e fins de semana. Não encerrar antecipadamente apenas por uma diferença temporária. Se a amostra for pequena ao final do período, reportar o resultado como inconclusivo.

## Métricas
- **KPI primário:** visitantes da página que clicaram no botão ÷ visitantes únicos de cada variante.
- **Secundárias disponíveis neste protótipo:** sessões, gravações de sessão e cliques por variante no Clarity.
- **Limitação:** o botão registra o clique, mas o protótipo não implementa carrinho, checkout ou pagamento. Portanto, compras, receita e ticket médio não podem ser medidos com a implementação atual.

## Análise e decisão
Após o período do teste, comparar visitantes e cliques das duas variantes e calcular as taxas de clique. Para afirmar um vencedor, verificar significância estatística com nível de confiança de 95% (p < 0,05), usando um teste para comparação de duas proporções. Se os dados disponíveis no Clarity não permitirem obter contagens confiáveis de visitantes e eventos por variante, apresentar a análise como descritiva e não declarar significância.

- **B vence com evidência estatística e sem piora relevante nas métricas observadas:** recomendar a variante.
- **Empate ou amostra insuficiente:** manter o controle e considerar repetir com mais tráfego.
- **B apresenta resultado pior:** manter o controle e rever a hipótese.

## Estado da entrega
As páginas estão publicadas e o Clarity e a atribuição A/B estão instalados. A coleta e a análise dos dados ainda precisam ocorrer durante o período definido; não há vencedor até que esses dados sejam observados.
