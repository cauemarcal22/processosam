function calculateDateDifference(date1, date2) {
    // Criar objetos Date a partir das strings
    const dateObj1 = new Date(date1);
    const dateObj2 = new Date(date2);
  
    // Calcular a diferença em milissegundos
    const differenceInMilliseconds = Math.abs(dateObj2 - dateObj1);
  
    // Converter milissegundos para dias
    const differenceInDays = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  
    // Retornar a mensagem com a diferença
    return `A diferença entre as datas é de ${differenceInDays} dias.`;
  }
  
  // Exemplo de uso:
  console.log(calculateDateDifference("2025-01-20", "2025-01-26")); // A diferença entre as datas é de 6 dias.
  console.log(calculateDateDifference("2025-01-26", "2025-01-20")); // A diferença entre as datas é de 6 dias.