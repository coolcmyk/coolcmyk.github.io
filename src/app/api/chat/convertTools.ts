import { FunctionDeclaration, Type } from '@google/genai';

/**
 * Converts Vercel AI SDK tools to Gemini function declarations
 */
export function convertToolToFunctionDeclaration(tool: any): FunctionDeclaration {
  // Extract basic info
  const name = tool.name || tool.description.split(' ')[0].toLowerCase();
  const description = tool.description || '';
  
  // Convert Zod schema to Gemini parameters
  const parameters: any = {
    type: Type.OBJECT,
    properties: {},
    required: []
  };
  
  // Process schema if it exists
  if (tool.parameters && tool.parameters.shape) {
    Object.entries(tool.parameters.shape).forEach(([key, value]: [string, any]) => {
      // Determine parameter type
      let paramType = Type.STRING;
      if (value.description?.includes('number')) paramType = Type.NUMBER;
      if (value.description?.includes('boolean')) paramType = Type.BOOLEAN;
      
      // Add parameter definition
      parameters.properties[key] = {
        type: paramType,
        description: value._def?.description || ''
      };
      
      // Check if required
      if (value._def?.isRequired) {
        parameters.required.push(key);
      }
    });
  }
  
  // If no parameters in schema, use empty object
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