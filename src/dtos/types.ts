export interface VolunteerDTO {
    name: string;
    gender: string;
    dob: string;
    photo: string;
    email: string;
    password: string;
    phone_number: string;
    address: string;
}

export interface EncounterDTO {
    volunteer_id: number;
    latitude: number;
    longitude: number;
    date: string;
    notes: string;
    photo: string;
    num_of_people: number;
}

export interface HomelessPersonDTO {
    name: string;
    age: number;
    gender: string;
    dob: string;
    willing_to_move: boolean;
    has_id_proof: boolean;
    notes: string;
}

export interface OldAgeHomeDTO {
    name: string;
    latitude: number;
    longitude: number;
    address: string;
    available_capacity: number;
    primary_contact_name: string;
    primary_contact_phone: string;
    alternate_contact_name?: string;
    alternate_contact_phone?: string;
    website?: string;
    accepting_residents: boolean;
}

export interface ContributionDTO {
    volunteer_id: number;
    resource_type: string;
    quantity: number;
    latitude: number;
    longitude: number;
    notes: string;
}

export interface TransferDTO {
    homeless_person_id: number;
    oldage_home_id: number;
    volunteer_id: number;
    status: string;
    transfer_date: string;
    notes: string;
}

export interface LoginDTO {
    email: string;
    password: string;
}

export interface LoginResponseDTO {
    volunteer_id: number;
    name: string;
    email: string;
}