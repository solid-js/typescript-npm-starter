
import { Other } from './Other';

class SuperTest
{
	constructor ()
	{
		this.boule();
	}

	protected boule ()
	{
		const other = new Other();

		console.log(`Coucou ${other.test()}`);
	}
}

global['truc'] = new SuperTest();