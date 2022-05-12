export const atributosTablaGoogleSheet = {
    id: 'ID (automático)',
    nombreVulgar: 'Nombre Vulgar',
    nombreCientifico: 'Nombre Científico',
    especie: 'Especie',
    descripcion:'Descripción',
    datoExtra:"Dato Extra (opcional)", 
    imagenes:'Imágenes (opcional)',
    link:"Link (automático)", 
  };
  
  export interface TablaGoogleSheet {
    id: any,
    nombreVulgar: string,
    nombreCientifico: string,
    especie: string,
    descripcion:string,
    datoExtra:string, 
    imagenes:any,
    link:string, 
  }
  