export default async function getPartnerts() {
  try {
    const response = await fetch(`${process.env.APIHACKTHONAMATATA}ongs`);
    if (!response.ok) {
      throw new Error('Erro ao buscar campanha');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro ao buscar campanha:', error);
    return null;
  }
}