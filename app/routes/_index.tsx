import type { ActionFunctionArgs, MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export async function action({ request }: ActionFunctionArgs) {
  const form = await request.formData();
  console.log(form.get('size'));
  console.log(form.getAll('toppings'));
  return {};
}

export default function Index() {
  return (
    <>
      <main>
        <h2>Remixez votre pizza</h2>

        <form method="POST" action="?index">
          <fieldset>
            <legend>Selectionnez la taille</legend>

            <label htmlFor="small">
              <input id="small" type="radio" name="size" value="small" />
              Small
            </label>

            <label htmlFor="medium">
              <input id="medium" type="radio" name="size" value="medium" />
              Medium
            </label>

            <label htmlFor="large">
              <input id="large" type="radio" name="size" value="large" />
              Large
            </label>
          </fieldset>

          <fieldset>
            <legend>Choisissez votre garniture</legend>

            <label htmlFor="anchovy">
              <input
                id="anchovy"
                type="checkbox"
                name="toppings"
                value="anchovy"
              />
              Anchois
            </label>

            <label htmlFor="bacon">
              <input id="bacon" type="checkbox" name="toppings" value="bacon" />
              Bacon
            </label>

            <label htmlFor="basil">
              <input id="basil" type="checkbox" name="toppings" value="basil" />
              Basilic
            </label>

            <label htmlFor="chili">
              <input id="chili" type="checkbox" name="toppings" value="chili" />
              Piment
            </label>

            <label htmlFor="mozzarella">
              <input
                id="mozzarella"
                type="checkbox"
                name="toppings"
                value="mozzarella"
              />
              Mozzarella
            </label>

            <label htmlFor="mushroom">
              <input
                id="mushroom"
                type="checkbox"
                name="toppings"
                value="mushroom"
              />
              Champignon
            </label>

            <label htmlFor="olive">
              <input id="olive" type="checkbox" name="toppings" value="olive" />
              Olive
            </label>

            <label htmlFor="onion">
              <input id="onion" type="checkbox" name="toppings" value="onion" />
              Oignon
            </label>

            <label htmlFor="pepper">
              <input
                id="pepper"
                type="checkbox"
                name="toppings"
                value="pepper"
              />
              Poivre
            </label>

            <label htmlFor="pepperoni">
              <input
                id="pepperoni"
                type="checkbox"
                name="toppings"
                value="pepperoni"
              />
              Pepperoni
            </label>

            <label htmlFor="sweetcorn">
              <input
                id="sweetcorn"
                type="checkbox"
                name="toppings"
                value="sweetcorn"
              />
              Mais
            </label>

            <label htmlFor="tomato">
              <input
                id="tomato"
                type="checkbox"
                name="toppings"
                value="tomato"
              />
              Tomate
            </label>
          </fieldset>

          <button type="submit">Commander</button>
        </form>
      </main>
    </>
  );
}
