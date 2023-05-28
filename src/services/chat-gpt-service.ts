import _ from "lodash";

export const callChatGPTCompletion = async (
  prompt: string,
  max_tokens: number = 3072
): Promise<string> => {
  let result = "";
  let GPT_API_KEY = "";

  if (_.isEmpty(GPT_API_KEY)) {
    return Promise.reject();
  }

  try {
    const response = await fetch("/chatapi", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GPT_API_KEY}`,
      },
      body: JSON.stringify({
        prompt,
        max_tokens,
        temperature: 0.3,
        model: "text-davinci-003",
      }),
    });

    const json = await response.json();
    const { choices } = json;

    if (choices?.length > 0) {
      result = choices[0]?.text?.trim() || "";
    }
  } catch (err) {
    console.log(err);
  }

  return result;
};
