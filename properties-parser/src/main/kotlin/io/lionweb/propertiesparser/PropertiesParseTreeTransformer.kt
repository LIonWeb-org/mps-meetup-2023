package io.lionweb.propertiesparser

import com.strumenta.kolasu.antlr.mapping.ParseTreeToASTTransformer
import io.lionweb.propertiesparser.PropertiesParser.PropertiesFileContext
import io.lionweb.propertiesparser.PropertiesParser.PropertyContext
import io.lionweb.propertiesparser.PropertiesParser.ValueContext

class PropertiesParseTreeTransformer : ParseTreeToASTTransformer(allowGenericNode = false) {

    init {
        registerNodeTransformer(PropertiesFileContext::class) { pt: PropertiesFileContext ->
            PropertiesFile(pt.property().map { transform(it) as Property }.toMutableList())
        }
        registerNodeTransformer(PropertyContext::class) { pt: PropertyContext ->
            Property(pt.ID().text, transform(pt.value()) as Value)
        }
        registerNodeTransformer(ValueContext::class) { pt: ValueContext ->
            when {
                pt.INT_NUMBER() != null -> IntValue(pt.INT_NUMBER().text)
                pt.DEC_NUMBER() != null -> DecValue(pt.INT_NUMBER().text)
                pt.STRING() != null -> StringValue(pt.STRING().text.removeSurrounding("\""))
                pt.TRUE() != null -> BooleanValue(true)
                pt.FALSE() != null -> BooleanValue(false)
                else -> TODO(pt.text)
            }
        }
    }
}
