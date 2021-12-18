    //Döviz kuru
    $(function() {
        typeof $.fn.paraceviriciWidget == "function" &&
            $("#W2683").paraceviriciWidget({
                widget: "slideline",
                wData: {
                    kategori: 0,
                    currency: "USD-EUR-GBP-CHF-CNY-JPY-SAR"
                },
                wSize: {
                    wWidth: "100%",
                    wHeight: 22
                },
                wLeft: {
                    lStat: 0
                },
                wCode: {
                    cS: 18
                }
            });
    });