import { FunctionDeclaration, Type } from '@google/genai';

/**
 * Converts Vercel AI SDK tools to Gemini function declarations
 */
export function convertToolToFunctionDeclaration(tool: any): FunctionDeclaration {
  const name = tool.name || tool.description.split(' ')[0].toLowerCase();
  const description = tool.description || '';
  
  const parameters: any = {
    type: Type.OBJECT,
    properties: {},
    required: []
  };
  
  if (tool.parameters && tool.parameters.shape) {
    Object.entries(tool.parameters.shape).forEach(([key, value]: [string, any]) => {
      let paramType = Type.STRING;
      if (value.description?.includes('number')) paramType = Type.NUMBER;
      if (value.description?.includes('boolean')) paramType = Type.BOOLEAN;
      
      parameters.properties[key] = {
        type: paramType,
        description: value._def?.description || ''
      };
      
      if (value._def?.isRequired) {
        parameters.required.push(key);
      }
    });
  }
  
  if (Object.keys(parameters.properties).length === 0) {
    parameters.properties = {};
    parameters.required = [];
  }
  
  return {
    name,
    description,
    parameters
  };
}
