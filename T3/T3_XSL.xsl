<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    version="2.0">

    <xsl:template match="/">
        <xsl:result-document href="site/index.html">
            <html>
                <head>
                    <title>Arqueossitios do NW Português</title>
                </head>
                <body>
                    <h2>Arqueossitios do NW Português</h2> 
                    <table border="1" width="100%">
                        <tr>
                            <td width="30%" valign="top">
                                <h3>Índice de Arqueossitios</h3>
                                <ol>
                                    <xsl:apply-templates select="//ARQELEM" mode="indice">
                                        <xsl:sort select="IDENTI"></xsl:sort>
                                    </xsl:apply-templates>
                                </ol>
                            </td>
                        </tr>
                    </table>
                </body>
            </html>
        </xsl:result-document> 
        <xsl:apply-templates/>
    </xsl:template>
    
    <!-- templates de indice -->
    
    <xsl:template match="ARQELEM" mode="indice">
        <li>
            <a name="i{generate-id()}"/>
            <a href="{generate-id()}.html">
                <xsl:value-of select="IDENTI"/>
            </a>
        </li>
    </xsl:template>
    
    <!-- Templates para o conteudo -->
    
    <xsl:template match="ARQELEM">
        <xsl:result-document href="site/{generate-id()}.html">
            <html>
                <head>
                    <title><xsl:value-of select="IDENTI"/></title>
                </head>
                <body>
                    <P><b>Tipo:</b> <xsl:value-of select="TIPO"/></P>
                    <P><b>Identificador:</b> <xsl:value-of select="IDENTI"/></P>
                    <p><b>Imagem:</b> <xsl:value-of select="IMAGEM"/> </p>
                    <P><b>Descrição:</b> <xsl:value-of select="DESCRI"/></P>
                    <P><b>Crono:</b> <xsl:value-of select="CRONO"/></P>
                    <P><b>Lugar:</b> <xsl:value-of select="LUGAR"/></P>
                    <P><b>Freguesia:</b> <xsl:value-of select="FREGUE"/></P>
                    <P><b>Concelho:</b> <xsl:value-of select="CONCEL"/></P>
                    <P><b>Codadm:</b> <xsl:value-of select="CODADM"/></P>
                    <P><b>Latitude:</b> <xsl:value-of select="LATITU"/></P>
                    <P><b>Longitudo:</b> <xsl:value-of select="LONGIT"/></P>
                    <P><b>Altitude:</b> <xsl:value-of select="ALTITU"/></P>
                    <P><b>Acesso:</b> <xsl:value-of select="ACESSO"/></P>
                    <P><b>Quadro:</b> <xsl:value-of select="QUADRO"/></P>
                    <P><b>Traarq:</b> <xsl:value-of select="TRAARQ"/></P>
                    <P><b>Desarq:</b> <xsl:value-of select="DESARQ"/></P>
                    <P><b>Interp:</b> <xsl:value-of select="INTERP"/></P>
                    <P><b>Biblio:</b> <xsl:value-of select="BIBLIO"/></P>
                    <P><b>Deposi:</b> <xsl:value-of select="DEPOSI"/></P>
                    <P><b>Intere:</b> <xsl:value-of select="INTERE"/></P>
                    <P><b>Biblio:</b> <xsl:value-of select="BIBLIO"/></P>
                    <P><b>Desarq:</b> <xsl:value-of select="DESARQ"/></P>
                    <P><b>Autor:</b> <xsl:value-of select="AUTOR"/></P>
                    <P><b>Traarq:</b> <xsl:value-of select="TRAARQ"/></P>
                    <P><b>Data:</b> <xsl:value-of select="DATA"/></P>
                    <address>
                        [<a href="index.html#i{generate-id()}">Voltar à Página Inicial</a>]
                    </address>

                </body>
            </html> 
        </xsl:result-document>
    </xsl:template>
   
</xsl:stylesheet>