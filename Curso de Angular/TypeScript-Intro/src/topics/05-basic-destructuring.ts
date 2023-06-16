interface authorDetails {
    author: string,
    age: number,
    isActive: boolean
};

interface album {
    name: string,
    traks: number,
    year: number,
    art: string,
    details: authorDetails
};


const Noche: album = {
    name: 'Noche',
    traks: 13,
    year: 2017,
    art: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFkAZAMBIgACEQEDEQH/xAAbAAEBAAIDAQAAAAAAAAAAAAAAAQIGAwQFB//EADgQAAIBAwIDBQUDDQAAAAAAAAABAgMEEQUxEiFBBhNhkaEUInGBsTVS8CMkMjM0QlFTYnKC0eH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A+IdEVNrZtfBkWyAGXHP78vMjlJ7yb+LIAAIAKCAAAAKCIoBgMAFsjltKaq3VKnLPDKa4sb46+hwrY57OcadwpSkoYjLEmnyfC0tvHAHchYd7RVaNpV7tx4sxrx5Jc84ayY1dP4G80b2Cx/JU/VNfxRx29vRU1KpOhWhhrhVXu3n/ACR3Jxi6M/Zndqo1hRp3MZp+TywOhO0SjOUauOCPE4VabhLGceK38Tqno1PbJULireqt+rUFKqnu5p45/BnntNbrGQIAUCAAAUhQIykZQItikWxQIAABsWn3VCVfTajSlGlUfeUOF8+XOX/DXTv6TVULiCc4w58nLOPmBsepdlre8s6t/olX34+9UspxxJL+n/T8zTmnFtNYa5NH06Or6fR0pUrWrCtf1eGDp0IPO+2+3iaf2v0ytp9/TqXEk6tzDvKiS5Rl1X0A8AAACkKBGUjKA6IBbIAAk2VIyQHPp1KjUvaNO5eKcpYfly9cG26FolrVqVpTo03TdRx4ZLLUfxz+ZpfU2Xs/rttbVY+3qceFfpwjlNrbK/GyA+l6L2ctNOai7eCkpZUsHj9vKdnTo1p3LhL83k4p9XySx82jz7vtvaOH5K4k30xCXP03NN1zW62q1HycKWVhN5csbZ9eXiB4+CNGWB1AwKWSwQCMoYAdEAtkAL0MkHsiPkwKVERUAAYQAAj3AkjEzMQIwGAC2RQtkAPUsNHrX+FSqQWfvJnFq+mVdLqwpV505Tks+43yNh7K/unR7b/aVL+wDXluZIwW5mtgAIAKd/RaFvcXqp3MHOONk2vodBHoaH+3xA9XtRZW1paR9koQpxbWeFc/M1c3LtZ9nr5fU00CNFDKB//Z',
    details: {
        author: 'Jose Madero',
        age: 43,
        isActive: true
    }
};

const {
    name,
    details:{author},
    year
} = Noche;

export {name, author, year };
