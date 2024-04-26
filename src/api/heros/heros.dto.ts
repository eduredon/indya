export interface HeroDto {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  }
}

export function fromHeroDto(dto: HeroDto) {
  return {
    name: dto.name,
    description: dto.description,
    image: `${dto?.thumbnail?.path}.${dto?.thumbnail?.extension}`
  };
}
