export interface Walk{
    status: string,
    dataDeAgendamento: string,
    preco: number,
    duracao: string,
    latitude: string,
    longitude: string,
    pets: string[],
    horarioDeInicio: string,
    horarioDeFim: string
}

export interface DogWalkInputDTO{
    appointmentDate: string,
    duration: string,
    latitude: string,
    longitude: string,
    pets: string[],
    numberOfPets: number,
    startTime: string,
    endTime: string
}