import {TestingModule, Test} from '@nestjs/testing';
import {AppModule} from './app.module';
import {ConfigService} from 'nestjs-config';

describe("Configs should be defined correctly", () => {

    let module: TestingModule;
    let config: ConfigService;

    beforeAll(async () => {
        module = await Test.createTestingModule({
            imports: [AppModule],
        }).compile();
        config = module.get(ConfigService);
    });

    it('Dogs should load correct config', () => {
        expect(config.get('dog-config.lives')).toBe(1);
        expect(config.get('dog-config.category')).toBe('canine');
    });

    it('Cats config should load correctly', () => {
        expect(config.get('cat-config.lives')).toBe(9);
        expect(config.get('cat-config.category')).toBe('feline');
    });
});