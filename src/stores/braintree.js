
import { defineStore } from "pinia"

export const useBraintreeStore = defineStore("braintree", {
    state: () => ({
        eviroment: "sandbox",
        mechiantId: "9g7qfhffswh7cg63",
        cseKey: 'MIIBCgKCAQEAx3d01k1GLpvfukIyBPPUVolYzSTswYKSAy1uIxYMgR9mlhgwGeMwOcqiFf10pnPHNUsvR2t7LqUltrvFaqMuHHgd+weOYWqQr/wboVuK3IYDO7JUEin/B0BN0/FqaGkWyFqrfwdvDBx/JpRBLfQj85AzPV/vct3r3qbuvtyUKT3eKmYmSAG36VuH25yN9D8uYNmQqbvFE0INc3G3yR+oUyh8xaeZqWSuIC8HBWI5rklw7KXukiQ9qH/roSP1R+oHbvliYCcWZv7y3OjNWwKHKGKJ1pUjUCoIUfBgCaEuh+7ERtwTeGa/Q9M48bg20V68uNJTOKKy6lZ5BYbkCmSiewIDAQAB'
        , authKey: "sandbox_6mksczhf_9g7qfhffswh7cg63"
    })
})